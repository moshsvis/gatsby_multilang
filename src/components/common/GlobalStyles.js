import { createGlobalStyle } from 'styled-components'
import { darkenLighten } from "./ColorAdjust"

// Use these if not delivered from the API (design) see @ Layout.js
const defaultColors = {
  page_bg_color: "#deffdf", // 
  page_text_color: "#2f5830", // 
  page_link_color: "#004400", // violet
  header_bg_color: "#5ac65d", // green
  header_link_color: "#2b5f2d", // 
};

// Use these if not delivered from the API (design) see @ Layout.js
const defaultFonts = {
    logo_font: "Raleway",
    page_font: "Raleway",
    nav_font: "Raleway"
};

// Computed from defaultColors minus is ligther
const computedColors = {
    header_link_hover_color: darkenLighten(defaultColors.header_link_color, -40),
    // don't show during development
    // header_and_footer_link_visited_color: darkenLighten(defaultColors.header_link_color, 40),
    footer_bg_color: darkenLighten(defaultColors.header_bg_color, -120),
    footer_link_color: darkenLighten(defaultColors.header_bg_color, 40),
    footer_bottom_bar_bg_color: darkenLighten(defaultColors.header_bg_color, -130),
    page_title_color: darkenLighten(defaultColors.page_text_color, 60),
    page_link_hover_color: darkenLighten(defaultColors.page_link_color, 60),
    page_button_hover_bg_color: darkenLighten(defaultColors.page_link_color, -10),
    // dont show during development
    // page_link_visited_color: darkenLighten(defaultColors.page_link_color, 10),
    component_bg_color: darkenLighten(defaultColors.page_bg_color, -10),
};

const GlobalStyle = createGlobalStyle`
          html{
            --header-bg-color: ${props => props.headerbgcolor};
            --header-link-color: ${props => props.headerlinkcolor};
            --footer-bg-color: ${computedColors.footer_bg_color};
            --footer-text-color: ${computedColors.footer_link_color};
            --footer-bottom-bar-bg-color: ${computedColors.footer_bottom_bar_bg_color};
            --header-and-footer-link-hover-color: ${computedColors.header_link_hover_color};
            --header-and-footer-link-visited-color: ${computedColors.header_and_footer_link_visited_color};
            --page-bg-color: ${props => props.pagebgcolor};
            --page-title-color: ${computedColors.page_title_color};
            --page-text-color: ${props => props.pagetextcolor};
            --page-link-color: ${props => props.pagelinkcolor};
            --page-link-hover-color: ${computedColors.page_link_hover_color};
            --page-button-hover-bg-color: ${computedColors.page_button_hover_bg_color};
            --page-button-hover-color: red;
            --page-link-visited-color: ${computedColors.page_link_visited_color};
            --component-bg-color: ${computedColors.component_bg_color};
            --portrait-img-bg: ${props => props.portraitimagebg};
            --portrait-img-text-color: ${props => props.portraitimgtextcolor};
            --portrait-img-title-color: ${computedColors.portrait_img_title_color};
            --logo-font: ${props => props.logofont};
            --page-font: ${props => props.pagefont};
            --nav-font: ${props => props.navfont};

            font-size: 12px !important;

            p{
              font-size: 1.2rem;
            }
          }

          body{
            background: var(--page-bg-color);
            /* color: var(--header-bg-color); */
            font-family: var(--page-font);
            /* font-family: 'Sniglet'; */
          }

          a{
            color: var(--page-link-color) !important;

            &:hover, &:focus{
              color: var(--page-link-hover-color) !important;
            }

            &:visited{
              color: var(--page-link-visited-color) !important;
            }
          }

          h1, h2, h3, h4, h5, h6{
            color: var(--page-title-color) !important;
          }

          p{
            color: var(--page-text-color) !important;
          }

          // Extra small devices (portrait phones, less than 576px)
        // No media query for xs since this is the default in Bootstrap

        // Small devices (landscape phones, 576px and up)
        @media (min-width: 576px) {
          html{
            font-size: 14px !important;
          }
        }

        // Medium devices (tablets, 768px and up)
        @media (min-width: 768px) {
          html{
            font-size: 16px !important;
          }
        }

        // Large devices (desktops, 992px and up)
        @media (min-width: 992px) {
          html{
            font-size: 18px !important;
          }
        }

        // Extra large devices (large desktops, 1200px and up)
        @media (min-width: 1200px) {
          html{
            font-size: 20px !important;
          }
        }   
        `;

export { GlobalStyle, defaultColors, defaultFonts }