import * as Style from './styles';
import homeIcon from '../../assets/menuHome.svg';
import registerIcon from '../../assets/menuRegister.svg';
import chartIcon from '../../assets/menuChart.svg';
import settingsIcon from '../../assets/menuSettings.svg';

export const MainMenu = ({ children }: { children: JSX.Element }) => {
  return (
    <Style.MainContainer>
      <Style.MainMenuContainer>
        <div className='icons'>
          <div className='icon actualPage'>
            <img src={homeIcon} alt='' />
            <div className='highlight actualPage' />
          </div>
          <div className='icon'>
            <img src={registerIcon} alt='' />
            <div className='highlight' />
          </div>
          <div className='icon'>
            <img src={chartIcon} alt='' />
            <div className='highlight' />
          </div>
          <div className='icon'>
            <img src={settingsIcon} alt='' />
            <div className='highlight' />
          </div>
        </div>
        <div className='links'>
          <div className='link actualPage'>
            <span>Tela inicial</span>
            <div className='highlight' />
          </div>
          <div className='link'>
            <span>Registrar movimentação</span>
            <div className='highlight' />
          </div>
          <div className='link'>
            <span>Gráficos</span>
            <div className='highlight' />
          </div>
          <div className='link'>
            <span>Configurações</span>
            <div className='highlight' />
          </div>
        </div>
      </Style.MainMenuContainer>
      <div className='screenContent'>{children}</div>
    </Style.MainContainer>
  );
}