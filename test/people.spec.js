
import People from '../src/people.js';


describe('people', () => {
  const people = new People(1, 'title', 'description', 'director', 'producer', 'poster', 'date', 'score')

  it('should be a function', () => {
    expect(typeof People).toBe('function');
  });

  it('sets Id', () => {
    people.setId(2)
    expect(people.getId()).toEqual(2);
  })

  it('sets name', () => {
    people.setName('newName')
    expect(people.getName()).toEqual('newName');
  })

  it('sets img', () => {
    people.setImg('newImg')
    expect(people.getImg()).toEqual('newImg');
  })

  it('sets Gender', () => {
    people.setGender('newGender')
    expect(people.getGender()).toEqual('newGender');
  })
  

  it('sets Age', () => {
    people.setAge('newAge')
    expect(people.getAge()).toEqual('newAge');
  })

  it('sets Eye Color', () => {
    people.setEyeColor('newEyeColor')
    expect(people.getEyeColor()).toEqual('newEyeColor');
  })

  it('sets HairColor', () => {
    people.setHairColor('newHairColor')
    expect(people.getHairColor()).toEqual('newHairColor');
  })

  it('sets Specie', () => {
    people.setSpecie('newSpecie')
    expect(people.getSpecie()).toEqual('newSpecie');
  })
})