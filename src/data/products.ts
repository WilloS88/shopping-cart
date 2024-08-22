import { v4 as uuidv4 } from 'uuid';
import type { Product } from '../types/Product';
import { GunType } from '../types/Product';

import ak47 from "../assets/products/ak47.jpg";
import colt1911 from '../assets/products/colt1911.jpg';
import coltRevolver from '../assets/products/coltRevolver.jpg';
import desertEagle from '../assets/products/desertEagle.jpg';
import glock19 from '../assets/products/glock19.jpg';
import m4a1 from '../assets/products/m4a1.jpg';
import mp5 from '../assets/products/mp5.jpg';
import mp7 from '../assets/products/mp7.jpg';
import mp9 from '../assets/products/mp9.jpg';
import scorpion from '../assets/products/scorpion.jpg';
import scorpionEvo from '../assets/products/scorpionEvo.jpg';
import usp from '../assets/products/usp.jpg';

export const products: Product[] = [
  {
    id: uuidv4(),
    name: 'AK-47',
    price: 999,
    image: ak47,
    description: 'A reliable and durable assault rifle known for its power and widespread use.',
    type: GunType.AssaultRifle,
    caliber: '7.62x39mm',  
  },
  {
    id: uuidv4(),
    name: 'Colt 1911',
    price: 849,
    image: colt1911,
    description: 'A classic semi-automatic pistol with a powerful .45 ACP round.',
    type: GunType.Pistol,
    caliber: '.45 ACP',  
  },
  {
    id: uuidv4(),
    name: 'Colt Revolver',
    price: 799,
    image: coltRevolver,
    description: 'A timeless revolver known for its reliability and classic design.',
    type: GunType.Pistol,
    caliber: '.357 Magnum',  
  },
  {
    id: uuidv4(),
    name: 'Desert Eagle',
    price: 1200,
    image: desertEagle,
    description: 'A massive and iconic handgun with an intimidating .50 AE caliber.',
    type: GunType.Pistol,
    caliber: '.50 AE',  
  },
  {
    id: uuidv4(),
    name: 'Glock 19',
    price: 499,
    image: glock19,
    description: 'A versatile and widely used 9mm pistol, perfect for both civilians and law enforcement.',
    type: GunType.Pistol,
    caliber: '9mm',  
  },
  {
    id: uuidv4(),
    name: 'M4A1',
    price: 1400,
    image: m4a1,
    description: 'A compact and powerful carbine used extensively by military forces worldwide.',
    type: GunType.AssaultRifle,
    caliber: '5.56×45mm NATO',  
  },
  {
    id: uuidv4(),
    name: 'MP5',
    price: 1150,
    image: mp5,
    description: 'A highly regarded submachine gun known for its precision and reliability.',
    type: GunType.SubmachineGun,
    caliber: '9mm',  
  },
  {
    id: uuidv4(),
    name: 'MP7',
    price: 1250,
    image: mp7,
    description: 'A modern submachine gun that combines compactness with firepower.',
    type: GunType.SubmachineGun,
    caliber: '4.6×30mm',  
  },
  {
    id: uuidv4(),
    name: 'MP9',
    price: 1100,
    image: mp9,
    description: 'A lightweight and compact submachine gun designed for close-quarters combat.',
    type: GunType.SubmachineGun,
    caliber: '9mm',  
  },
  {
    id: uuidv4(),
    name: 'Scorpion',
    price: 950,
    image: scorpion,
    description: 'A compact and powerful submachine gun favored for its portability and rapid fire rate.',
    type: GunType.SubmachineGun,
    caliber: '7.65×17mm',  
  },
  {
    id: uuidv4(),
    name: 'Scorpion EVO',
    price: 1300,
    image: scorpionEvo,
    description: 'An advanced version of the Scorpion with enhanced features and performance.',
    type: GunType.SubmachineGun,
    caliber: '9mm',  
  },
  {
    id: uuidv4(),
    name: 'USP',
    price: 800,
    image: usp,
    description: 'A highly reliable and accurate pistol popular with both military and police forces.',
    type: GunType.Pistol,
    caliber: '.45 ACP',  
  },
];
