/* eslint-disable no-new */

import DashboardMenu from '../component/DashboardMenu';
import { getSummary } from '../api';

let summary = {};
const DashboardScreen = {
  after_render: () => {},
  render: async () => {
    // summary = await getSummary();
    return `
    <div class="dashboard">
      ${DashboardMenu.render({ selected: 'dashboard' })}
      <div class="dashboard-content">
        <h1>Dashboard</h1>
       
      
          </div>
      
        </div>          
      </div>
    </div>
    `;
  },
};
export default DashboardScreen;
