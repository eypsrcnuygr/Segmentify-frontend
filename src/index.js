import contentFetcher from './helpers/ContentFetcher';
import './index.scss';

const domContentCreator = () => {
  contentFetcher();
};

domContentCreator();