import contentFetcher from './helpers/ContentFetcher';
import Sliding from './helpers/Sliding';

const domContentCreator = () => {
  contentFetcher();
  Sliding();
};

domContentCreator();