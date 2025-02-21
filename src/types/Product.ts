export type ProductItem = {
  id: string;
  name: string;
  price: number;
  image: string;
  image_url: string;
  description: string;
  type: GunType;
  caliber: string;
  quantity: number; 
}

export enum GunType {
  Pistol = "Pistol",
  AssaultRifle = "Assault Rifle",
  SubmachineGun = "Submachine Gun"
}
