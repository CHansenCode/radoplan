import { GiTable } from 'react-icons/gi';
import { FiUsers } from 'react-icons/fi';
import { BsClipboardCheck, BsBoxSeam } from 'react-icons/bs';

export const ButtonStyle = ({ isActive, ...props }) => {
  console.log(isActive);

  return (
    <>
      <button className="nav_button pc">
        <IconSwitch
          size="2rem"
          type={props.type}
          color={isActive ? 'white' : 'gray'}
        />
      </button>

      <style jsx>
        {`
          .nav_button {
            background: ${isActive ? 'currentColor' : 'transparent'};

            height: 3rem;
            width: 3rem;

            border: 1px solid ${isActive ? 'currentColor' : 'lightgray'};
            border-radius: 0.5rem;
            outline: none;

            padding: 0;
          }

          .nav_button:hover {
            cursor: pointer;
          }
        `}
      </style>
    </>
  );
};

const IconSwitch = ({ type, size, color }) => {
  switch (type) {
    case 'workstations':
      return <GiTable size={'2.5rem'} color={color} />;
      break;

    case 'users':
      return <FiUsers size={'2rem'} color={color} />;
      break;

    case 'tasks':
      return <BsClipboardCheck size={'2rem'} color={color} />;
      break;

    case 'inventory':
      return <BsBoxSeam size={'2rem'} color={color} />;
      break;

    default:
      return <GiTable size={size} color={color} />;
      break;
  }
};
