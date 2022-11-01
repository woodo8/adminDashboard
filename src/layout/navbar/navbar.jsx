import React, { useContext, useState } from 'react'
import { Container, Col, Row } from 'react-bootstrap'
import './navbar.css'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Avatar from '../../assets/images/avatar.png'
import { Divider } from '@mui/material';
import USA from '../../assets/images/usa.png'
import Russia from '../../assets/images/russia.png'
import Uzbekistan from '../../assets/images/uzbekistan.png'
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import MailIcon from '@mui/icons-material/Mail';
import AssignmentIcon from '@mui/icons-material/Assignment';
import LogoutIcon from '@mui/icons-material/Logout';
import Popover from '@mui/material/Popover';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';
import StateContext from '../../context/useContext';

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: "#1A6CC7",
    '&:hover': {
        backgroundColor: "#1A6CC7",
    },
    marginLeft: 0,
    width: '100%',
    height: "50px",
    [theme.breakpoints.up('sm')]: {
        width: 'auto',
    },
}));
const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: "#fff",
}));
const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: '#fff',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            width: '15ch',
            '&:focus': {
                width: '20ch',
            },
        },
    },
}));



export default function Navbar() {
    const [profileSub, setProfileSub] = useState(false)
    const { navStretch, setnavStretch } = useContext(StateContext)

    const subCloser = () => {
        setTimeout(() => {
            setProfileSub(false)
        }, 300);
    }
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;

    return (
        <div className={navStretch ? "navbar l-285" : "navbar l-90"}>
            <Container className='p-0'>
                <Row className='w-100'>

                    <Col md="12" className="d-flex justify-content-between align-items-center">
                        {/* <Box sx={{ minWidth: 120 }}>
                        <FormControl fullWidth>
                            <InputLabel variant="standard" htmlFor="uncontrolled-native">

                                <span className='d-flex align-items-center mx-5 language'><img alt='.....' src={USA} className="flag" /><p className='lang mx-2'>En</p></span>
                            </InputLabel>
                            <NativeSelect
                                defaultValue={30}
                                inputProps={{
                                    name: 'age',
                                    id: 'uncontrolled-native',
                                }}
                            >
                                <option value={10}>
                                    <span className='pointer d-flex align-items-center language p-3'><img src={USA} alt="...." className="flag" /><p className='lang mx-2'>English(US)</p></span>
                                </option>
                                <option value={20}>
                                    <span className='pointer d-flex align-items-center language p-3'><img src={Russia} alt="..." className="flag" /><p className='lang mx-2'>Russian</p></span>
                                </option>
                                <option value={30}>
                                    <span className='pointer d-flex align-items-center language p-3'><img src={Uzbekistan} alt="..." className="flag" /><p className='lang mx-2'>Uzbek</p></span>
                                </option>
                            </NativeSelect>
                        </FormControl>
                    </Box> */}
                        <div className='d-flex align-items-center'>

                            <div className={navStretch ? "burger active" : "burger"} >
                                <div className='childBurger' onClick={() => setnavStretch(!navStretch)}></div>
                            </div>
                            <Search className='search-box d-flex align-items-center d-sm-none d-md-flex'>
                                <SearchIconWrapper className='d-sm-none d-md-flex'>
                                    <SearchIcon />
                                </SearchIconWrapper>
                                <StyledInputBase
                                    className='d-sm-none d-md-flex'
                                    placeholder="Search…"
                                    inputProps={{ 'aria-label': 'search' }}
                                />
                            </Search>
                        </div>
                        <div className='d-flex align-items-center'>
                            <Button className='d-sm-none d-md-flex' sx={{ marginRight: "20px", height: "40px", width: "180px" }} aria-describedby={id} variant="contained" onClick={handleClick}>
                                <img src={USA} alt="...." className="flag" /><p className='lang mx-2'>English(US)</p>
                            </Button>
                            <Popover
                                id={id}
                                open={open}
                                anchorEl={anchorEl}
                                onClose={handleClose}
                                anchorOrigin={{
                                    vertical: 'bottom',
                                    horizontal: 'left',
                                }}
                            >
                                <span className='pointer d-flex align-items-center language p-3'><img src={USA} alt="...." className="flag" /><p className='lang mx-2'>English(US)</p></span>
                                <Divider />
                                <span className='pointer d-flex align-items-center language p-3'><img src={Russia} alt="..." className="flag" /><p className='lang mx-2'>Russian</p></span>
                                <Divider />
                                <span className='pointer d-flex align-items-center language p-3'><img src={Uzbekistan} alt="..." className="flag" /><p className='lang mx-2'>Uzbek</p></span>
                                <Divider />
                            </Popover>

                            <div onMouseLeave={subCloser} onClick={() => setProfileSub(true)} className="profile-box d-flex align-items-center">
                                <img src={Avatar} alt="...." />
                                <div className='d-sm-none d-md-block'>
                                    <p className="admin-name">Emma walter</p>
                                    <span>Admin <KeyboardArrowDownIcon />  </span>
                                </div>
                                {profileSub ?
                                    <div onMouseOver={() => setProfileSub(true)} className='profile-sub'>
                                        <div className="d-flex p-2"><PermIdentityIcon /> <p className="mx-2">Account</p></div>
                                        <Divider />
                                        <div className="d-flex p-2"><MailIcon /> <p className="mx-2">Inbox</p></div>
                                        <Divider />
                                        <div className="d-flex p-2"><AssignmentIcon /> <p className="mx-2">Taskboard</p></div>
                                        <Divider />
                                        <div className="d-flex p-2"><LogoutIcon /> <p className="mx-2">Log Out</p></div>
                                    </div>
                                    : null}
                            </div>
                        </div>
                    </Col>
                </Row>

            </Container>
        </div>
    )
}
