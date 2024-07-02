import type { Schema, Attribute } from '@strapi/strapi';

export interface ChefsBlockChefsBlock extends Schema.Component {
  collectionName: 'components_chefs_block_chefs_blocks';
  info: {
    displayName: 'Chefs Block';
    description: '';
  };
  attributes: {
    overview: Attribute.Text;
    headline: Attribute.String;
    raul: Attribute.Text;
    murilo: Attribute.Text;
    picture: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface ExperienceBlockExperienceBlock extends Schema.Component {
  collectionName: 'components_experience_block_experience_blocks';
  info: {
    displayName: 'Experience Block';
  };
  attributes: {
    title: Attribute.String;
    content: Attribute.Text;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'chefs-block.chefs-block': ChefsBlockChefsBlock;
      'experience-block.experience-block': ExperienceBlockExperienceBlock;
    }
  }
}
