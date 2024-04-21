import Edit from "../img/edit1.png";
import Delete from "../img/delete.png";
import { Link } from "react-router-dom";
import Menu from "../component/Menu";
const Single = () => {
  return (
    <div className="single">
      <div className="content">
        <img
          src="https://source.unsplash.com/featured/?technology,code"
          alt=""
        />

        <div className="user">
          <img
            src="https://source.unsplash.com/featured/?animals,wildlife"
            alt=""
          />
          <div className="info">
            <span>Rose</span>
            <p>Posted 2 days ago</p>
          </div>

          <div className="edit">
            <Link to={`/write/?edit=2`}>
              <img src={Edit} alt="" />
            </Link>

            <img src={Delete} alt="" />
          </div>
        </div>

        <h1> this is Adil rose this my friend</h1>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ultricies
          vestibulum turpis, in malesuada dui lobortis ut. Fusce in elit nulla.
          Integer vel tellus sit amet risus malesuada blandit vel et ligula.
          Mauris dignissim vel purus eu tempor. Sed vel tellus nec leo molestie
          tempor et ac tortor. Integer id ex eros. Ut aliquet nulla at lorem
          iaculis, et suscipit nunc tempus. Maecenas consequat odio ac purus
          convallis vehicula. Fusce accumsan felis ut malesuada congue. Sed eu
          nisl ut tortor viverra tincidunt. Curabitur convallis erat et lacinia
          condimentum. Maecenas auctor lorem ac nunc mattis, ut faucibus justo
          scelerisque. Mauris vitae lorem ultricies, fermentum nisi id, lacinia
          lacus. Cras eget erat neque. Donec ultricies arcu eget tincidunt
          faucibus. Donec congue vitae arcu et volutpat. Cras euismod vestibulum
          sapien sit amet pharetra. Mauris ullamcorper, dui vel finibus
          volutpat, sem est dictum eros, a rhoncus sapien odio eget mi.
          <p>
            Phasellus sed metus quis orci hendrerit dictum nec sit amet ligula.
            Duis ultricies nisl odio, nec lobortis dolor vestibulum sed. Cras
            sollicitudin, mauris a viverra ultricies, orci odio ultricies purus,
            sit amet bibendum elit ipsum et eros. Suspendisse vitae volutpat
            ligula. Morbi tempus orci sed justo commodo, nec ullamcorper odio
            luctus. Donec sem libero, auctor sit amet nunc id, aliquet ultricies
          </p>
          <p>
            Phasellus sed metus quis orci hendrerit dictum nec sit amet ligula.
            Duis ultricies nisl odio, nec lobortis dolor vestibulum sed. Cras
            sollicitudin, mauris a viverra ultricies, orci odio ultricies purus,
            sit amet bibendum elit ipsum et eros. Suspendisse vitae volutpat
            ligula. Morbi tempus orci sed justo commodo, nec ullamcorper odio
            luctus. Donec sem libero, auctor sit amet nunc id, aliquet ultricies
          </p>
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ultricies
          vestibulum turpis, in malesuada dui lobortis ut. Fusce in elit nulla.
          Integer vel tellus sit amet risus malesuada blandit vel et ligula.
          Mauris dignissim vel purus eu tempor. Sed vel tellus nec leo molestie
          tempor et ac tortor. Integer id ex eros. Ut aliquet nulla at lorem
          iaculis, et suscipit nunc tempus. Maecenas consequat odio ac purus
          convallis vehicula. Fusce accumsan felis ut malesuada congue. Sed eu
          nisl ut tortor viverra tincidunt. Curabitur convallis erat et lacinia
          condimentum. Maecenas auctor lorem ac nunc mattis, ut faucibus justo
          scelerisque. Mauris vitae lorem ultricies, fermentum nisi id, lacinia
          lacus. Cras eget erat neque. Donec ultricies arcu eget tincidunt
          faucibus. Donec congue vitae arcu et volutpat. Cras euismod vestibulum
          sapien sit amet pharetra. Mauris ullamcorper, dui vel finibus
          volutpat, sem est dictum eros, a rhoncus sapien odio eget mi.
          <p>
            Phasellus sed metus quis orci hendrerit dictum nec sit amet ligula.
            Duis ultricies nisl odio, nec lobortis dolor vestibulum sed. Cras
            sollicitudin, mauris a viverra ultricies, orci odio ultricies purus,
            sit amet bibendum elit ipsum et eros. Suspendisse vitae volutpat
            ligula. Morbi tempus orci sed justo commodo, nec ullamcorper odio
            luctus. Donec sem libero, auctor sit amet nunc id, aliquet ultricies
          </p>
          </p>
      </div>
      
      <Menu/>
    </div>
  );
};

export default Single;
