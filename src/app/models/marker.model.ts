export class Marker {
  constructor(
    public lat: number,
    public lng: number,
    public title: string = 'Sin título',
    public description: string = 'Sin descripción'
  ) {}
}
