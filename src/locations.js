export default class Location {
    constructor(locations_data) {
        this.id = locations_data['id']
        this.name = locations_data['name']
        this.img = locations_data['img']
        this.climate = locations_data['climate']
        this.terrain = locations_data['terrain']
        this.surface_water = locations_data['surface_water']
        this.residents = locations_data['residents']
    }

    getId() {
        return this.id
    }

    getName() {
        return this.name
    }

    getImg() {
        return this.img
    }

    getClimate() {
        return this.climate
    }

    getTerrain() {
        return this.terrain
    }

    getSurfaceWater() {
        return this.surface_water
    }

    getResidents() {
        return this.residents
    }

    setId(newId) {
        this.id = newId
    }

    setName(newName) {
        this.name = newName
    }

    setImg(newImg) {
        this.img = newImg
    }

    setClimate(newClimate) {
        this.climate = newClimate
    }

    setTerrain(newTerrain) {
        this.terrain = newTerrain
    }
    
    setSurfaceWater(newSurfaceWater) {
        this.surface_water = newSurfaceWater
    }

    setResidents(newResidents) {
        this.residents = newResidents
    }

}