export interface IProduit {
  id?: number;
  description?: string;
  isDeleted?: number;
  libelle?: string;
  url?: number;
}

export class Produit implements IProduit {
  constructor(
    public id?: number,
  public description?: string,
  public isDeleted?: number,
  public libelle?: string,
  public url?: number,

  ) {}
}
