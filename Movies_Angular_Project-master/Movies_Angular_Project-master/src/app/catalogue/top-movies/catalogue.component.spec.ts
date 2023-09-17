import { ComponentFixture, TestBed, waitForAsync, fakeAsync, tick } from '@angular/core/testing';
import { CatalogueComponent } from './catalogue.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MovieApiService } from '../../services/movie-api.service';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { of, throwError } from 'rxjs';
import { By } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router'; // Import ActivatedRoute
import { RouterLink } from '@angular/router';

describe('CatalogueComponent', () => {
  let component: CatalogueComponent;
  let fixture: ComponentFixture<CatalogueComponent>;
  let movieApiService: MovieApiService;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [CatalogueComponent],
      imports: [HttpClientTestingModule, TranslateModule.forRoot()  , RouterLink],
      providers: [TranslateService, MovieApiService,
        {
          provide: ActivatedRoute, // Provide a mock ActivatedRoute
          useValue: {
            snapshot: {
              data: {}, // Add any route data you need for testing here
            },
          },
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(CatalogueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    movieApiService = TestBed.inject(MovieApiService);
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize the movies property with data from the service', fakeAsync(() => {
    const moviesData = [{ id: 1, title: 'Movie 1' }, { id: 2, title: 'Movie 2' }];
    const getMoviesSpy = spyOn(movieApiService, 'get_Movies').and.returnValue(of(moviesData));
    component.ngOnInit();
    tick();
    expect(component.movies).toEqual(moviesData);
  }));

  it('should display "Top Movies" in an H1 element', () => {
    let compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain("Top Movies");
  });

  it('should handle errors when loading movies', fakeAsync(() => {
    const getMoviesSpy = spyOn(movieApiService, 'get_Movies').and.returnValue(
      throwError('An error occurred')
    );
    component.ngOnInit();
    tick();
    
    expect(component.movies).toBeUndefined();
    
    expect(component.errorMessage).toEqual('An error occurred');
  }));
  
  it('Check the color of the Rating is gold', waitForAsync(() => { 
    const mockMovies = {
      results: [
        {
          id: 1,
          title: 'Test Movie',
          release_date: '2023-09-07',
          vote_average: 2,
        }
      ]
    };
    component.movies = mockMovies;
    
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      const movieDetail = fixture.debugElement.query(By.css('.movie-details')).nativeElement;
      const rating =  movieDetail.querySelector('.movie-details-text-rating');
      expect(getComputedStyle(rating).color).toBe('rgb(255, 215, 0)');
    });
  }));
});
