/**
 *
 * Asynchronously loads the component for MapItem
 *
 */

import loadable from 'loadable-components';

export default loadable(() => import('./index'));
