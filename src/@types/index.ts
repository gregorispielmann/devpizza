export interface IData {
  day_flavor: {
    id: number;
    name: string;
    ingredients: string;
    dough: string;
    type: string;
    points: number;
    price: number;
    image?: string;
  };
  doughs: [
    {
      id: number;
      name: string;
      type: string;
      description: string;
      price: number;
      image?: string;
    },
  ];
  sizes: [
    {
      id: number;
      name: string;
      type: string;
      description: string;
      price: number;
      image?: string;
    },
  ];
  filling: [
    {
      id: number;
      name: string;
      type: string;
      description: string;
      price: number;
      image?: string;
    },
  ];
}
