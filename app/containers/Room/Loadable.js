/**
 *
 * Asynchronously loads the component for Room
 *
 */

import loadable from 'loadable-components';

export default loadable(() => import('./index'));
