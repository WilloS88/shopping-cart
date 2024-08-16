export type Product = {
  id: string;
  name: string;
  price: number;
  image: string;
  description: string;
  type: 'Pistol' | 'Assault Rifle' | 'Submachine Gun';
  caliber: string;
}
