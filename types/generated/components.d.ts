import type { Schema, Attribute } from '@strapi/strapi';

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
      'experience-block.experience-block': ExperienceBlockExperienceBlock;
    }
  }
}
