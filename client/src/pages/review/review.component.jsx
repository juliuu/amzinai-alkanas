import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { ReviewContainer, ReviewWrapper, ReviewMainSection, ReviewHeadingWrapper, ImageCardWrapper } from './review.styles';

import Footer from '../../components/footer/footer.component';
import ImageCard from '../../components/imageCard/imageCard.component';
import SideBar from '../../components/sidebar/sidebar.component';
import ReviewScore from '../../components/reviewScore/reviewScore.component';
import Comments from '../../components/comments/comments.component';

const commentData = {
  _id: '23847',
  comments: [
    {
      commentId: '23498257',
      author: 'Test user 1',
      imgUrl: 'some_url',
      timestamp: 1631125671,
      comment:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consectetur earum omnis officia iure sint minus quae voluptatibus placeat cum dignissimos.',
      replies: [
        {
          commentId: '329487',
          author: 'Test user 2',
          imgUrl: null,
          timestamp: 1631126080,
          comment: 'Lorem ipsum dolor sit amet.',
        },
      ],
    },
    {
      commentId: '9234',
      author: 'test user 3',
      imgUrl: 'some_url2',
      timestamp: 1631126145,
      comment:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus minima, tempore, architecto maiores impedit ullam sunt, eligendi quam id iste amet. Voluptatem voluptate, quidem libero perspiciatis ab inventore, corporis ex similique rerum at quasi, natus itaque aut nisi asperiores deserunt.',
      replies: [
        {
          commentId: '293847',
          author: 'test use 2',
          imgUrl: 'some_url3',
          timestamp: 1631126221,
          comment:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit nam vero adipisci fugiat quaerat! Harum ipsam mollitia exercitationem voluptates. Minus debitis impedit exercitationem? Optio et magnam maiores enim. Officiis commodi distinctio sint eligendi aspernatur cumque quo, minus vero molestiae ut, necessitatibus perferendis. Ducimus dignissimos suscipit totam esse alias autem provident!',
        },
        {
          commentId: '239487',
          author: 'Test user 2',
          imgUrl: null,
          timestamp: 1631126080,
          comment: 'Lorem ipsum dolor sit amet.',
        },
      ],
    },
    {
      commentId: '23840',
      author: 'test user 3',
      imgUrl: 'some_url2',
      timestamp: 1631126145,
      comment:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus minima, tempore, architecto maiores impedit ullam sunt, eligendi quam id iste amet. Voluptatem voluptate, quidem libero perspiciatis ab inventore, corporis ex similique rerum at quasi, natus itaque aut nisi asperiores deserunt.',
      replies: [],
    },
  ],
};

const ReviewPage = () => {
  const { id } = useParams();

  const embedId = '05UQzZVd3SM'; // TODO: remove and add normal Id comng from youtube
  const sidebarSize = 3; // TODO: calculate based on screen height maybe?

  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);
  const [sidebarData, setSidebarData] = useState(null);
  const [averageRating, setAverageRating] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await fetch(`/api/apzvalgos/${id}`).then((res) => res.json());

        setData(result.data);
        setAverageRating(result.averageRating);
      } catch (error) {
        setIsLoaded(true);
        setError(error);
      }
    };

    fetchData();
  }, [id]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetch(`/api/receptai/?sort=rating&offset=0&size=${sidebarSize}`).then((res) => res.json());

        setSidebarData(data);
      } catch (error) {
        setIsLoaded(true);
        setError(error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (data && sidebarData) setIsLoaded(true);
  }, [data, sidebarData]);

  const youtueEmbedUrl = `https://www.youtube.com/embed/${embedId}?rel=0&modestbranding=1`;

  if (error) {
    return <div>Error: {error.message}</div>; // TODO: make a simple error page
  } else if (!isLoaded) {
    return <div>Loading...</div>; // TODO: make a cool loading component
  } else {
    return (
      <ReviewContainer>
        <ReviewWrapper>
          <ReviewMainSection>
            <ReviewHeadingWrapper>
              <h2>test heading</h2>
              <h4>RESTORANO APŽVALGA</h4>
              <p>2021-08-11</p>
            </ReviewHeadingWrapper>
            {/* https://dev.to/bravemaster619/simplest-way-to-embed-a-youtube-video-in-your-react-app-3bk2 */}
            {/* <iframe
              src={youtueEmbedUrl}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title="Embedded youtube"
              style={{
                width: '50.7rem',
                height: '26.2rem',
                paddingBottom: '1.1rem',
              }} // TODO: border-radius: 1.5rem not really working
            /> */}
            <iframe
              src="https://www.youtube.com/embed/TZI1tG0RC3I"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
              style={{
                width: '50.7rem',
                height: '26.2rem',
                paddingBottom: '1.1rem',
              }} // TODO: border-radius: 1.5rem not really working
            ></iframe>
            {data.intro}
            <h2>MAISTO APŽVALGA</h2>
            <h3>Ragauti patiekalai:</h3>
            <ImageCardWrapper>
              {data.dishes.map((dish, index) => (
                <ImageCard key={index} name={dish.name} url={dish.url} />
              ))}
            </ImageCardWrapper>
            {data.review}
            <h3>MAISTO ĮVERTINIMAS</h3>
            {data.foodScore.map((score, index) => (
              <ReviewScore key={index} {...score} />
            ))}
            <h3>RESTORANO ĮVERTINIMAS</h3>
            {data.restaurantScore.map((score, index) => (
              <ReviewScore key={index} {...score} />
            ))}
            <br />
            <h3>GALUTINIS ĮVERTINIMAS</h3>
            <ReviewScore rating={averageRating} comment={data.finalRemarks} />
            <Comments>{commentData}</Comments>
          </ReviewMainSection>
          <SideBar title="Populiariausi receptai" linkTo="/receptai" linkText="Skaityti receptą">
            {sidebarData}
          </SideBar>
        </ReviewWrapper>
        <Footer />
      </ReviewContainer>
    );
  }
};

export default ReviewPage;
