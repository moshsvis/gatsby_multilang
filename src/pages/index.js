import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import SliceZone from '../components/Homepage/sliceZone';

export const query = graphql`
	{
		prismic {
			allHomepages {
				edges {
					node {
						body {
							... on PRISMIC_HomepageBody2_text_1_info {
								type
								fields {
									info
									text
								}
							}
							... on PRISMIC_HomepageBodyBilderKarussell {
								type
								fields {
									image
								}
							}
							... on PRISMIC_HomepageBodyText {
								type
								label
								primary {
									rich_text
									site_title
								}
							}
							... on PRISMIC_HomepageBodyCall_to_action_grid {
								type
								primary {
									section_title
								}
								fields {
									anchor_link_label
									link_to_anchor
									button_label
									call_to_action_title
									content
									featured_image
									button_destination {
										... on PRISMIC_Portrait {
											_meta {
												uid
											}
										}
										... on PRISMIC_Page {
											page_title
											content
											_meta {
												uid
											}
										}
									}
								}
							}
							... on PRISMIC_HomepageBodyAnrisstext {
								type
								fields {
									anchor
									teasertext
									title
									button_label
									link_to_correspondig_text {
										... on PRISMIC_Page {
											page_title
											content
											_meta {
												uid
											}
										}
									}
								}
							}
							... on PRISMIC_HomepageBodyCarousel {
								type
								primary {
									section_title
								}
								fields {
									image
									alt
									caption_title
									caption_text
									link {
										... on PRISMIC__ExternalLink {
											url
										}
									}
								}
							}
						}
					}
				}
			}
		}
	}
`;

const IndexPage = (props) => {
	// console.log('slice zone pros', props);
	return (
		<Layout>
			<SliceZone node={props.data.prismic.allHomepages.edges[0].node} />
		</Layout>
	);
};

export default IndexPage;
