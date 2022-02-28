import { searchWord, showMorePopular, showYearN, showSortAZ, filterlist, filterByProductor, getRandomInt, quizMood, moodSelection} from '../src/order.js';

describe('searchWord', () => {
  it('should be a funcion', () => {
    expect(typeof searchWord).toBe('function');
  });

  it('should return movies filtered', () => {
    expect(searchWord([ { "id": "11", "title": "Castle in the Sky", "description": "The orphan Sheeta inherited a mysterious crystal that links her to the mythical sky-kingdom of Laputa. With the help of resourceful Pazu and a rollicking band of sky pirates, she makes her way to the ruins of the once-great civilization. Sheeta and Pazu must outwit the evil Muska, who plans to use Laputa's science to make himself ruler of the world.", "director": "Hayao Miyazaki", "producer": "Isao Takahata", "release_date": "1986", "people": [{"name": "pazu"}] }, { "id": "45", "title": "My Neighbor Totoro", "description": "Two sisters move to the country with their father in order to be closer to their hospitalized mother, and discover the surrounding trees are inhabited by Totoros, magical spirits of the forest. When the youngest runs away from home, the older sister seeks help from the spirits to find her.", "director": "Hayao Miyazaki", "producer": "Hayao Miyazaki", "release_date": "1988", "people": [{"name": "Satsuki Kusakabe"}] }], "pazu")).toStrictEqual([ { "id": "11", "title": "Castle in the Sky", "description": "The orphan Sheeta inherited a mysterious crystal that links her to the mythical sky-kingdom of Laputa. With the help of resourceful Pazu and a rollicking band of sky pirates, she makes her way to the ruins of the once-great civilization. Sheeta and Pazu must outwit the evil Muska, who plans to use Laputa's science to make himself ruler of the world.", "director": "Hayao Miyazaki", "producer": "Isao Takahata", "release_date": "1986", "people": [{"name": "pazu"}]}]);
  });
})


describe('showMorePopular', () => {
    it('should be a funcion', () => {
      expect(typeof showMorePopular).toBe('function');
    });

    it('should return movies ordered by score', () => {
      expect(showMorePopular([{ "id": "11", "rt_score": "41", }, { "id": "45", "rt_score": "75" }])).toStrictEqual([ { "id": "45", "rt_score": "75", }, { "id": "11", "rt_score": "41" } ]);
    });
})


describe('showYearN', () => {
  it('should be a funcion', () => {
    expect(typeof showYearN).toBe('function');
  });

  it('should return movies ordered by Year News', () => {
    expect(showYearN("news", [{ "id": "11", "release_date": "2013", }, { "id": "45", "release_date": "2014" }])).toStrictEqual([ { "id": "45", "release_date": "2014", }, { "id": "11", "release_date": "2013" } ]);
  });

  it('should return movies ordered by Year Olds', () => {
    expect(showYearN("olds", [{ "id": "45", "release_date": "2014", }, { "id": "11", "release_date": "2013" }])).toStrictEqual([{ "id": "11", "release_date": "2013", }, { "id": "45", "release_date": "2014" }]);
  });
})


describe('showSortAZ', () => {
  it('should be a funcion', () => {
    expect(typeof showSortAZ).toBe('function');
  });

  it('should return movies ordered alphabetic A-Z', () => {
    expect(showSortAZ("sortaz", [{ "id": "11", "title": "From Up on Poppy Hill", }, { "id": "45", "title": "Castle in the Sky" }])).toStrictEqual([ { "id": "45", "title": "Castle in the Sky", }, { "id": "11", "title": "From Up on Poppy Hill" } ]);
  });

  it('should return movies ordered alphabetic Z-A', () => {
    expect(showSortAZ("sortza", [{ "id": "45", "title": "Castle in the Sky", }, { "id": "11", "title": "From Up on Poppy Hill" }])).toStrictEqual([{ "id": "11", "title": "From Up on Poppy Hill", }, { "id": "45", "title": "Castle in the Sky" }]);
  });
})


describe('filterlist', () => {
  it('should be a funcion', () => {
    expect(typeof filterlist).toBe('function');
  });
})


describe('filterByProductor', () => {
  it('should be a funcion', () => {
    expect(typeof filterByProductor).toBe('function');
  });

  it('should return movies filtered by Productor', () => {
    expect(filterByProductor([{ "id": "11", "director": "Hayao Miyazaki", "producer": "Hayao Miyazaki" }, { "id": "45", "director": "Hayao Miyazaki", "producer": "Hayao Miyazaki" }], "Hayao Miyazaki", "Isao Takahata")).toEqual([{ "id": "11", "director": "Hayao Miyazaki", "producer": "Hayao Miyazaki" }, { "id": "45", "director": "Hayao Miyazaki", "producer": "Hayao Miyazaki" }]);
  });
})


describe('getRandomInt', () => {
  it('should be a funcion', () => {
    expect(typeof getRandomInt).toBe('function');
  });

  it('should returns number', () => {
    expect(typeof getRandomInt(0,15)).toBe("number");
  });
})


describe('quizMood', () => {
  it('should be a funcion', () => {
    expect(typeof quizMood).toBe('function');
  });
})


describe('moodSelection', () => {
  it('should be a funcion', () => {
    expect(typeof moodSelection).toBe('function');
  });

  it('should return a Age', () => {
    expect(moodSelection([{"id": "11", 'age': '50'}], [{"id": "45", 'age': '50'}], [{"id": "50", 'age': '14'}], "jung")).toStrictEqual([{"id": "50", 'age': '14'}]);
  });
})
