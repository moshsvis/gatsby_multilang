import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import { Nav, NavDropdown } from 'react-bootstrap';
import facebookIcon from '../images/facebook-square-brands.svg';
import instagramIcon from '../images/instagram-square-brands.svg';
import { StyledTopNavbar, StyledImage } from './common/StyledTopNavbar';
import { navigate } from 'gatsby';
export default function TopNav({ headerbgcolor }) {
	const toggleLanguage = (lang) => {
		localStorage.setItem('lang', lang);
		const arr = window.location.pathname.split('/');

		if (lang !== 'de-ch') {
			navigate(`/${lang}/${arr[arr.length - 1]}`);
		} else {
			console.log(window.location.pathname.split('/'));
			// navigate(`${window.location.pathname}`);
			navigate(`/${arr[arr.length - 1]}`);
		}
	};

	// console.log('header backround top Navi color', headerbgcolor);
	return (
		<StaticQuery
			query={graphql`
				{
					prismic {
						allNavigations {
							edges {
								node {
									opacity
									navigation_links {
										lable
										link {
											... on PRISMIC__ExternalLink {
												target
												_linkType
												url
											}
										}
									}
									type
								}
							}
						}
					}
				}
			`}
			render={(data) => {
				// console.log('top topnavi data', data);
				return (
					<StyledTopNavbar
						className="top-nav"
						bg="light"
						expand="lg"
						fixed="top"
						headerbgcolor={headerbgcolor}
						opacity={data.prismic.allNavigations.edges[1].node.opacity}
					>
						{data.prismic.allNavigations.edges.map((navigation, i) => {
							if (navigation.node.type === 'Topzeile') {
								// console.log('Topzeile', navigation.node.opacity);
								return (
									<Nav className="ml-auto" opacity={navigation.node.opacity}>
										{navigation.node.navigation_links.map((navitem, i) => {
											return (
												<Nav.Link href={navitem.link.url}>
													<StyledImage
														src={
															navitem.lable === 'Facebook' ? (
																facebookIcon
															) : navitem.lable === 'Instagram' ? (
																instagramIcon
															) : null
														}
													/>
												</Nav.Link>
											);
										})}
									</Nav>
								);
							} else {
								return null;
							}
						})}

						<NavDropdown
							title={'Languages'}
							id="basic-nav-dropdown"
							key={'lang'}
							style={{
								fontSize: '5px'
							}}
						>
							<NavDropdown.Item
								as="li"
								key={'de-ch'}
								onClick={() => {
									toggleLanguage('de-ch');
								}}
							>
								German
							</NavDropdown.Item>
							<NavDropdown.Item
								as="li"
								key={'en-us'}
								onClick={() => {
									toggleLanguage('en-us');
								}}
							>
								English
							</NavDropdown.Item>
						</NavDropdown>
					</StyledTopNavbar>
				);
			}}
		/>
	);
}
