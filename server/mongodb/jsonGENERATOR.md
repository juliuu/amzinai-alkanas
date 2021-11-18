REVIEWS

[
  '{{repeat(15)}}',
  {
    _id: '{{objectId()}}',
    imgUrl: 'img-{{index(1)}}-url',
    heading: '{{lorem(integer(2, 5), "words")}}',
    intro: '{{lorem(integer(30, 60), "words")}}',
    dishes: [
      '{{repeat(integer(1, 3))}}',
     {
       name: '{{lorem(integer(1, 3), "words")}}',
       url: '{{lorem(1, "words")}}-img-url'
      }
    ],
    foodScores: [
      '{{repeat(integer(2, 5))}}',
      {
        category: '{{lorem(integer(1, 3), "words")}}',
        comment: '{{lorem(integer(12, 35), "words")}}',
        rating: '{{floating(1.1, 10)}}'
      }
    ],
    restaurantScore: [
      '{{repeat(integer(2, 5))}}',
      {
        category: '{{lorem(integer(1, 3), "words")}}',
        comment: '{{lorem(integer(12, 35), "words")}}',
        rating: '{{floating(1.1, 10)}}'
      }
    ],
    review: '{{lorem(integer(20, 60), "words")}}',
    finalRemarks: '{{lorem(integer(10, 30), "words")}}',
    rating: '{{floating(1.1, 10)}}',
    timestamp: '{{Math.round((new Date(integer(2020, 2021), integer(0, 12), integer(0, 28))).getTime() / 1000);}}',
    type: '{{random("pizza", "asian", "kebab", "lithuanian", "fastFood")}}'
  }
]

RECIPES

[
  '{{repeat(15)}}',
  {
    _id: '{{objectId()}}',
    imgUrl: 'img-{{index(1)}}-url',
    heading: '{{lorem(integer(2, 5), "words")}}',
    intro: '{{lorem(integer(20, 35), "words")}}',    rating: '{{floating(1.1, 10)}}',
    timestamp: '{{Math.round((new Date(integer(2020, 2021), integer(0, 12), integer(0, 28))).getTime() / 1000);}}',
    ingredients: [
      '{{repeat(integer(2, 5))}}',
      '{{lorem(integer(2, 5), "words")}}'
    ],
    instructions: [
      '{{repeat(integer(4, 8))}}',
      {
        step: '{{index(1)}}',
        imgUrl: 'img-{{index(1)}}-url',
        instruction: '{{lorem(integer(10, 80), "words")}}'
      }
    ]
  }
]