// it('div with class movie-details should be visible', waitForAsync(() => { 
//     const mockMovies = {
//       results: [
//         {
//           id: 1,
//           title: 'Test Movie',
//           release_date: '2023-09-07',
//           vote_average: 2,
//         }
//       ]
//     };
//     component.movies$ = mockMovies;

//     fixture.detectChanges();
//     fixture.whenStable().then(() => {
//       const movieDetail = fixture.debugElement.query(By.css('.movie-details')).nativeElement;
//       expect(movieDetail).toBeTruthy(); 
//       expect(movieDetail.innerHTML.length).toBeGreaterThan(0); 
//     });
//   }));


//   it('Check that the backgound color of the movie detail conatiner is Black', waitForAsync(() => { 
//     const mockMovies = {
//       results: [
//         {
//           id: 1,
//           title: 'Test Movie',
//           release_date: '2023-09-07',
//           vote_average: 2,
//         }
//       ]
//     };
//     component.movies$ = mockMovies;

//     fixture.detectChanges();
//     fixture.whenStable().then(() => {
//       const movieDetail = fixture.debugElement.query(By.css('.movie-details')).nativeElement;
//       const computedStyles = getComputedStyle(movieDetail);
//       const backgroundColor = computedStyles.backgroundColor;
//       expect(backgroundColor).toBe('rgba(0, 0, 0, 0)');
//     });
//   }));

//   it('Check that text color containing data is all white colored', waitForAsync(() => { 
//     const mockMovies = {
//       results: [
//         {
//           id: 1,
//           title: 'Test Movie',
//           release_date: '2023-09-07',
//           vote_average: 2,
//         }
//       ]
//     };
//     component.movies$ = mockMovies;
    
//     fixture.detectChanges();
//     fixture.whenStable().then(() => {
//       const movieDetail = fixture.debugElement.query(By.css('.movie-details')).nativeElement;
//       const computedStyles = getComputedStyle(movieDetail);
//       const textColor = computedStyles.color;

//       expect(textColor).toBe('rgb(255, 255, 255)');

    
//     });
//   }));

//   it('Check that the size of the image is defnite', waitForAsync(() => { 
//     const mockMovies = {
//       results: [
//         {
//           id: 1,
//           title: 'Test Movie',
//           release_date: '2023-09-07',
//           vote_average: 2,
//         }
//       ]
//     };
//     component.movies$ = mockMovies;
    
//     fixture.detectChanges();
//     fixture.whenStable().then(() => {
    
//       const movieImageElement = fixture.debugElement.query(By.css('.movie-image img')).nativeElement;

//       expect(movieImageElement.width).toBe(100); 
//       expect(movieImageElement.height).toBe(0); 
//     });
//   }));



//   it('Check the color of the Rating is gold', waitForAsync(() => { 
//     const mockMovies = {
//       results: [
//         {
//           id: 1,
//           title: 'Test Movie',
//           release_date: '2023-09-07',
//           vote_average: 2,
//         }
//       ]
//     };
//     component.movies$ = mockMovies;
    
//     fixture.detectChanges();
//     fixture.whenStable().then(() => {
//       const movieDetail = fixture.debugElement.query(By.css('.movie-details')).nativeElement;
//       const rating = movieDetail.querySelector('p[style="color: gold;"]');


//       expect(getComputedStyle(rating).color).toBe('rgb(255, 215, 0)');
//     });
//   }));

//   it('Check the border color of the container is red', waitForAsync(() => { 
//     const mockMovies = {
//       results: [
//         {
//           id: 1,
//           title: 'Test Movie',
//           release_date: '2023-09-07',
//           vote_average: 2,
//         }
//       ]
//     };
//     component.movies$ = mockMovies;
    
//     fixture.detectChanges();
//     fixture.whenStable().then(() => {
//       const movieDetail = fixture.debugElement.query(By.css('.movie-details')).nativeElement;
//       const computedStyles = getComputedStyle(movieDetail);
//       const borderColor = computedStyles.borderColor;

//       expect(borderColor).toBe('rgb(255, 255, 255)');
//     });
//   }));
