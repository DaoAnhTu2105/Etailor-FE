import React from 'react'
import { styled, css } from '@mui/system';
import PropTypes from 'prop-types';
import { Modal as BaseModal } from '@mui/base/Modal';
import Fade from '@mui/material/Fade';
import LogoImg from '../../../assets/images/4891599.jpg'
import { Button } from '@mui/base/Button';
import { Input as BaseInput, inputClasses } from '@mui/base/Input';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

const Input = React.forwardRef(function CustomInput(props, ref) {
    const { slots, ...other } = props;
    return (
        <BaseInput
            slots={{
                root: InputRoot,
                input: InputElement,
                ...slots,
            }}
            {...other}
            ref={ref}
        />
    );
});

Input.propTypes = {
    slots: PropTypes.shape({
        input: PropTypes.elementType,
        root: PropTypes.elementType,
        textarea: PropTypes.elementType,
    }),
};
export default function VerifyMail({openModal,closeModal}) {
    return (
        <div>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={openModal}
                onClose={closeModal}
                closeAfterTransition
                slots={{ backdrop: StyledBackdrop }}
            >
                <Fade in={openModal}>
                    < ModalContent sx={style}>
                        <div style={{ display: "flex", justifyContent: "flex-end" }}>
                            <div className='login-form' style={{ width: "50%" }}>
                                <h1 className="title is-2">Đăng nhập</h1>
                                <div className='input-form' >
                                    <Input
                                        id="outlined-start-adornment"
                                        name="email"
                                        autoFocus
                                        placeholder="Tên người dùng hoặc email"
                                    />
                                </div>
                                <div className='input-form'>
                                    <Input
                                        id="outlined-adornment-password"
                                        placeholder="Mật khẩu"
                                        name="password"
                                      
                                        endAdornment={
                                            <InputAdornment>
                                                <IconButton
                                                    size="small"
                                                    aria-label="toggle password visibility"
                                                >
                                                   
                                                </IconButton>
                                            </InputAdornment>
                                        }
                                    />
                                </div>
                                <div className='remember-user'>
                                    <label className="checkbox">
                                        <input type="checkbox">

                                        </input> Ghi nhớ đăng nhập
                                    </label>

                                </div>
                                <div className="field loginbtn-submit">
                                    <p className="control">
                                    </p>
                                </div>
                                <div className="field" style={{ paddingLeft: 10 }}>
                                    <p className="control">
                                        Chưa có tài khoản <a href="#" >Đăng ký ngay</a>
                                    </p>
                                    <p className="control" style={{ paddingTop: '10px' }}>
                                        <a href="#" >Quên mật khẩu</a>
                                    </p>
                                </div>

                            </div>
                            <div>
                                <img src={LogoImg} width={500} height={500}></img>
                            </div>
                        </div>

                    </ModalContent>
                </Fade>
            </Modal>
        </div>
    )
}
const Backdrop = React.forwardRef((props, ref) => {
    const { open, ...other } = props;
    return (
        <Fade in={open}>
            <div ref={ref} {...other} />
        </Fade>
    );
});

Backdrop.propTypes = {
    open: PropTypes.bool,
};

const blue = {
    200: '#99CCFF',
    300: '#66B2FF',
    400: '#3399FF',
    500: '#007FFF',
    600: '#0072E5',
    700: '#0066CC',
};

const grey = {
    50: '#F3F6F9',
    100: '#E5EAF2',
    200: '#DAE2ED',
    300: '#C7D0DD',
    400: '#B0B8C4',
    500: '#9DA8B7',
    600: '#6B7A90',
    700: '#434D5B',
    800: '#303740',
    900: '#1C2025',
};

const Modal = styled(BaseModal)`
  position: fixed;
  z-index: 130000;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledBackdrop = styled(Backdrop)`
  z-index: -1;
  position: fixed;
  inset: 0;
  background-color: rgb(0 0 0 / 0.5);
  -webkit-tap-highlight-color: transparent;
`;

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 1000,
    height: 500,
};

const ModalContent = styled('div')(
    ({ theme }) => css`
    font-family: 'IBM Plex Sans', sans-serif;
    font-weight: 500;
    text-align: start;
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 8px;
    overflow: hidden;
    background-color: ${theme.palette.mode === 'dark' ? grey[900] : '#fff'};
    border-radius: 8px;

    & .modal-title {
      margin: 0;
      line-height: 1.5rem;
      margin-bottom: 8px;
    }

    & .modal-description {
      margin: 0;
      line-height: 1.5rem;
      font-weight: 400;
      color: ${theme.palette.mode === 'dark' ? grey[400] : grey[800]};
      margin-bottom: 4px;
    }
  `,
);

const InputRoot = styled('div')(
    ({ theme }) => `
    font-family: 'IBM Plex Sans', sans-serif;
    font-weight: 400;
    border-radius: 8px;
    color: ${theme.palette.mode === 'dark' ? grey[300] : grey[500]};
    background: ${theme.palette.mode === 'dark' ? grey[900] : '#fff'};
    border: 1px solid ${theme.palette.mode === 'dark' ? grey[700] : grey[200]};
    box-shadow: 0px 2px 4px ${theme.palette.mode === 'dark' ? 'rgba(0,0,0, 0.5)' : 'rgba(0,0,0, 0.05)'
        };
    display: flex;
    align-items: center;
    justify-content: center;
   
  
  
    &.${inputClasses.focused} {
      border-color: ${blue[400]};
      box-shadow: 0 0 0 3px ${theme.palette.mode === 'dark' ? blue[600] : blue[200]};
    }
  
    &:hover {
      border-color: ${blue[400]};
    }
  
    // firefox
    &:focus-visible {
      outline: 0;
    }
  `,
);

const InputElement = styled('input')(
    ({ theme }) => `
    font-size: 1rem;
    font-family: inherit;
    font-weight: 500;
    line-height: 2;
    flex-grow: 1;
    color: ${theme.palette.mode === 'dark' ? grey[300] : grey[900]};
    background: inherit;
    border: none;
    border-radius: inherit;
    padding: 8px 12px;
    outline: 0;
  `,
);

const IconButton = styled(Button)(
    ({ theme }) => `
    display: inline-flex;
    align-items: center;
    justify-content: center;
    border: none;
    background: inherit;
    cursor: pointer;
    color: ${theme.palette.mode === 'dark' ? grey[300] : grey[700]};
    `,
);

const InputAdornment = styled('div')`
    margin: 8px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
  `;