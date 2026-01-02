import { IgrIconButton, IgrIconButtonModule, IgrNavbar, IgrNavbarModule, IgrRipple, IgrRippleModule } from 'igniteui-react';
import styles from './dashboard.module.css';
import createClassTransformer from '../../style-utils';

IgrIconButtonModule.register();
IgrNavbarModule.register();
IgrRippleModule.register();

export default function Dashboard() {
  const classes = createClassTransformer(styles);
  const uuid = () => crypto.randomUUID();

  return (
    <>
      <div className={classes("row-layout dashboard-container")}>
        <p className={classes("typography__caption text")}>
          <span>EcoRide est la principale plateforme de covoiturage pour les voyageurs de l' environnement et ceux qui recherchent une solution économique pour leur déplacements</span>
        </p>
        <img src="/src/assets/IMG_8688.jpg" className={classes("image")} />
      </div>
    </>
  );
}
