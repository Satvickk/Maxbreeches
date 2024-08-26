import React from 'react';
import { NavLink } from 'react-router-dom';
import banner from '../../../assets/img/product-image/fabrics.jpg';

const NaveItems = (props) => {
    const hasChildren = props.item?.children && props.item.children.length > 0;

    return (
        <>
            {props.item.mega_menu && hasChildren ? (
                <li className="has-dropdown has-megaitem">
                    <NavLink
                        to={props?.item?.href}
                        end
                        style={({ isActive }) => ({
                            color: isActive ? '#f79837' : '#7d7d7d',
                            fontWeight: isActive ? 'bold' : 'normal',
                        })}
                    >
                        {props.item?.name} <i className="fa fa-angle-down"></i>
                    </NavLink>
                    <div className="mega-menu">
                        <ul className="mega-menu-inner">
                            {props.item?.children?.map((item, index) => (
                                <li className="mega-menu-item" key={index}>
                                    <p className="mega-menu-item-title">{item.name}</p>
                                    <ul className="mega-menu-sub">
                                        {item?.children?.map((datas, index) => (
                                            <li key={index}>
                                                <NavLink
                                                    to={datas.href}
                                                    style={({ isActive }) => ({
                                                        color: isActive ? '#f79837' : '#7d7d7d',
                                                        fontWeight: isActive ? 'bold' : 'normal',
                                                    })}
                                                >
                                                    {datas.name}
                                                </NavLink>
                                            </li>
                                        ))}
                                    </ul>
                                </li>
                            ))}
                            <li className="mega-menu-item">
                                <div className="menu-banner">
                                    <NavLink to="/shop" className="menu-banner-link">
                                        <img className="menu-banner-img" src={banner} alt="img" />
                                    </NavLink>
                                </div>
                            </li>
                        </ul>
                    </div>
                </li>
            ) : hasChildren ? (
                <li>
                    <NavLink
                        to={props?.item?.href}
                        end
                        style={({ isActive }) => ({
                            color: isActive ? '#f79837' : '#7d7d7d',
                            fontWeight: isActive ? 'bold' : 'normal',
                        })}
                        className="main-menu-link"
                    >
                        {props?.item?.name}
                    </NavLink>
                    <ul className="sub-menu">
                        {props.item?.children?.map((data, index) => (
                            <li key={index}>
                                <NavLink
                                    to={data.href}
                                    style={({ isActive }) => ({
                                        color: isActive ? '#f79837' : '#7d7d7d',
                                        fontWeight: isActive ? 'bold' : 'normal',
                                    })}
                                >
                                    {data.name}
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                </li>
            ) : (
                <li>
                    <NavLink
                        to={props?.item?.href}
                        end
                        style={({ isActive }) => ({
                            color: isActive ? '#f79837' : '#7d7d7d',
                            fontWeight: isActive ? 'bold' : 'normal',
                        })}
                        className="main-menu-link"
                    >
                        {props?.item?.name}
                    </NavLink>
                </li>
            )}
        </>
    );
};

export default NaveItems;
