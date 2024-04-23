import type { Schema, Attribute } from '@strapi/strapi';

export interface ElementsHeroImage extends Schema.Component {
  collectionName: 'components_elements_hero_images';
  info: {
    displayName: 'Slide';
    description: '';
  };
  attributes: {
    image: Attribute.Media;
    text: Attribute.Blocks;
    buttonText: Attribute.String;
    buttonLink: Attribute.String;
  };
}

export interface ElementsPricingTable extends Schema.Component {
  collectionName: 'components_elements_pricing_tables';
  info: {
    displayName: 'Pricing Table';
  };
  attributes: {
    headline: Attribute.String;
    text: Attribute.Blocks;
  };
}

export interface ElementsRichText extends Schema.Component {
  collectionName: 'components_elements_rich_texts';
  info: {
    displayName: 'Rich Text';
  };
  attributes: {
    content: Attribute.Blocks;
  };
}

export interface ElementsSlideshow extends Schema.Component {
  collectionName: 'components_elements_slideshows';
  info: {
    displayName: 'Slideshow';
  };
  attributes: {
    slide: Attribute.Component<'elements.hero-image', true>;
  };
}

export interface ElementsVideoEmbed extends Schema.Component {
  collectionName: 'components_elements_video_embeds';
  info: {
    displayName: 'Video Embed';
  };
  attributes: {
    url: Attribute.String & Attribute.Required;
  };
}

export interface LayoutNavbar extends Schema.Component {
  collectionName: 'components_layout_navbars';
  info: {
    displayName: 'Navbar';
    description: '';
  };
  attributes: {
    headline: Attribute.String;
    link: Attribute.Component<'links.link', true>;
  };
}

export interface LinksLink extends Schema.Component {
  collectionName: 'components_links_links';
  info: {
    displayName: 'Link';
  };
  attributes: {
    url: Attribute.String;
    newTab: Attribute.Boolean;
    text: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'elements.hero-image': ElementsHeroImage;
      'elements.pricing-table': ElementsPricingTable;
      'elements.rich-text': ElementsRichText;
      'elements.slideshow': ElementsSlideshow;
      'elements.video-embed': ElementsVideoEmbed;
      'layout.navbar': LayoutNavbar;
      'links.link': LinksLink;
    }
  }
}
