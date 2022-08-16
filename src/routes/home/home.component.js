import { Outlet } from 'react-router-dom';

import Directory from '../../components/directory/directory.component';

const Home = () => {
  const categories = [
    {
      id: 1,
      title: 'Name',
      imageUrl: 'https://scontent-lax3-2.xx.fbcdn.net/v/t1.6435-9/123270485_3450452655003535_6233055769148908411_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=174925&_nc_ohc=jCyCRIjNjm8AX91imk1&_nc_oc=AQlhZfy0qDpMfZNoxJHwqJnPjpGMzKf60qKMtgpisJ1p2s0u-na-MkNCjH_f7ztOEU0&_nc_ht=scontent-lax3-2.xx&oh=00_AT9AG6BBQaV0t9OJadghaDMxq3Tt7LuXUiM7Hosi06OemQ&oe=630ECC79',
    },
    {
      id: 2,
      title: 'Name',
      imageUrl: 'https://scontent-lax3-2.xx.fbcdn.net/v/t31.18172-8/10620072_987512007964291_3085327807632399487_o.jpg?_nc_cat=107&ccb=1-7&_nc_sid=174925&_nc_ohc=YNj8NI7YREwAX8eWa-w&tn=Oo6z2oDmeVkwXeVz&_nc_ht=scontent-lax3-2.xx&oh=00_AT-qSMQlQIvV_hcKsJkYnGh_eCOFfekQbTR1FBq006mXlg&oe=630C1B95',
    },
    {
      id: 3,
      title: 'name',
      imageUrl: 'https://scontent-lax3-2.xx.fbcdn.net/v/t31.18172-8/10620072_987512007964291_3085327807632399487_o.jpg?_nc_cat=107&ccb=1-7&_nc_sid=174925&_nc_ohc=YNj8NI7YREwAX8eWa-w&tn=Oo6z2oDmeVkwXeVz&_nc_ht=scontent-lax3-2.xx&oh=00_AT-qSMQlQIvV_hcKsJkYnGh_eCOFfekQbTR1FBq006mXlg&oe=630C1B95',
    },
    {
      id: 4,
      title: 'name',
      imageUrl: 'https://scontent-lax3-1.xx.fbcdn.net/v/t1.18169-9/299174_234982186550614_1362751188_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=174925&_nc_ohc=XTGHYs4JpFgAX-U_9V8&_nc_ht=scontent-lax3-1.xx&oh=00_AT-v2PkjmsIbKaZRPEqWOa1aZv_s37_157VsoplWZ3V6oA&oe=630D4ECC',
    },
    {
      id: 5,
      title: 'name',
      imageUrl: 'https://scontent-lax3-2.xx.fbcdn.net/v/t1.18169-9/197144_174080332640800_2557196_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=174925&_nc_ohc=aUyg16mOyJsAX8xd7_5&_nc_ht=scontent-lax3-2.xx&oh=00_AT8t7pmWckeWSr3QMeb2x7vR_ELfs4i8lyK-FtzdMb3ptw&oe=630F29FD',
    },
  ];

  return (
    <div>
      <Directory categories={categories} />
      <Outlet />
    </div>
  );
};

export default Home;