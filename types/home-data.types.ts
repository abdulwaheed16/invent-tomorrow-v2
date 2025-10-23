export interface CardData {
  icon: any;
  title: string;
  description: string;
}

export interface IStackItem {
  name: string;
  logo: any;
}

export interface Testimonial {
  quote: string;
  stars: number;
  clientName: string;
  clientTitle: string;
  clientAvatar: string;
}

export interface FooterData {
  companyLinks: { name: string; url: string }[];
  servicesLinks: { name: string; url: string }[];
  socials: { icon: React.JSX.Element; url: string }[];
  description: string;
  logo: string;
}
