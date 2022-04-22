import React from 'react';
import axios from 'axios';
import Movie from './components/Movie';
import './App7.css';

class App7 extends React.Component {
  state = {
    isLoading: true,
    movies: [],
  };
  render() {
    const { isLoading, movies } = this.state;
    // 변수 isLoading의 데이터에 따라서 화면에 출력하는 문구를 변경함
    return (
      <section className="container">
        {isLoading ? (
          <div className="loader">
            <span className="loader-text">Loading...</span>
          </div>
        ) : (
          <div className="movies">
            {movies.map((movie) => {
              return (
                <Movie
                  key={movie.id}
                  id={movie.id}
                  year={movie.year}
                  title={movie.title}
                  summary={movie.summary}
                  poster={movie.medium_cover_image}
                  genres={movie.genres}
                />
              );
            })}
          </div>
        )}
      </section>
    );
  }
  // async / await
  // 비동기 로직을 처리하기 위한 최신 방법
  //ES2017 버전에 추가된 새로운 비동기 로직 처리 방식
  // async 키워드를 사용 시 해당 함수내에서 비동기 처리가 필요한 메서드가 있음을 알려줌
  // await 키워드 사용 시 해당 메서드의 비동기 처리가 완료될 때까지 로직을 실행하지 않고 기다려 줌
  // 사용법
  // async function 함수명(){
  // await 비동기 처리 메서드명();
  //}
  getMovies = async () => {
    try {
      //   const movies = await axios.get('https://yts-proxy.now.sh/list_movies.json');
      //   console.log("통신 성공");
      // console.log(movies.data.data.movies);
      // this.setState({movies: movies.data.data.movies, isLoading:false});

      const {
        data: {
          data: { movies },
        },
      } = await axios.get('https://yts-proxy.now.sh/list_movies.json?limit=5&sort_by=rating');

      this.setState({ movies: movies, isLoading: false });
    } catch (err) {
      console.log('통신 시 오류가 발생했습니다');
      console.log(err);
    }
  };
  // getMovies = () => {
  //     axios.get('https://yts-proxy.now.sh/list_movies.json').then((res) => {
  //         console.log('통신 성공');
  //         console.log(res);
  //     })
  //     .catch((err) => {
  //         console.log('에러가 발생했습니다');
  //         console.log(err);
  //     });
  // };
  componentDidMount() {
    // setTimeout(() => {

    //   this.setState({isLoading: false });
    // }, 5000);
    this.getMovies();
  }
}

export default App7;