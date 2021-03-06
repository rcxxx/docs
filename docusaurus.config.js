const math = require('remark-math');
const katex = require('rehype-katex');

module.exports = {
    title: "Rcxxx's Notes",
    tagline: '个人学习笔记',
    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',
    favicon: 'img/icons/lzumi-icon-05-128x128.jpg',    

    url: 'https://github.com/rcxxx/docs/',
    baseUrl: '/docs/',
    organizationName: 'rcxxx', // Usually your GitHub org/user name.
    projectName: 'docs', // Usually your repo name.
    themeConfig: {
      colorMode: {
        defaultMode: 'light',
        disableSwitch: false,
        respectPrefersColorScheme: true,
        switchConfig: {
          darkIcon: '🌜',
          lightIcon: '🌞',
          // React inline style object
          // see https://reactjs.org/docs/dom-elements.html#style
          darkIconStyle: {
            marginLeft: '2px',
          },
          lightIconStyle: {
            marginLeft: '1px',
          },
        },
      },
      hideableSidebar: true,
      navbar: {
        hideOnScroll: true, // 自动隐藏导航栏
        title: "Home",
        logo: {
          alt: 'My Site Logo',
          // src: 'img/logo.svg',
          // src: 'img/lzumi-icon-05-128x128.svg',
          src: 'img/icons/konosuba-01.png',
        },
        items: [
          {
            to: 'docs/',
            activeBasePath: 'docs',
            label: 'README',
            position: 'left',
          },

          {
            label: '💻',
            position: 'left',
            items: [
              { label: 'C/C++', to: '/docs/docs/cc/cc-classes-and-objects'},
              { label: 'Python', },
              { label: '数据结构', to: '/docs/docs/data-structures/大话数据结构/data-structures-introduction'},
              { label: 'ios', to: '/docs/docs/ios/ios-about-xcode'},
              
            ],
          },

          {
            label: '🧠Interesting',
            position: 'left',
            items: [
              { label: 'ML & DL', to: '/docs/docs/AI/about-AI'},
              { label: 'opencv', to: '/docs/docs/opencv/about-opencv'},
              { label: 'pytorch', to: '/docs/docs/pytorch/about-pytorch'},
              { label: 'tensorflow', },
              { label: 'yolo', to: '/docs/docs/yolo/yolov5-start'},
              
            ],
          },

          {
            label: '👽robot',
            position: 'left',
            items: [
              { label: 'RoboCon', to: '/docs/docs/robocon/about-rc'},
              { label: 'RoboMaster', to: '/docs/docs/robomaster/about-rm'},
              { label: 'ROS', to: '/docs/docs/ros/ros-install'},
              
            ],
          },

          {
            label: '👾project',
            position: 'left',
            items: [
              { label: '毕业设计', to: '/docs/docs/project/毕业设计/graduation-project'},
              { label: '车道线检测', to: '/docs/docs/project/车道线检测/about-lane-detection'},
              
            ],
          },

          {
            label: '🎮',
            position: 'right',
            items: [
              { label: '就知道玩',},              
            ],
          },

          {
            label: '🍻',
            position: 'right',
            items: [
              { label: '就知道吃',},          
            ],
          },
          
          // {to: 'blog', label: 'Blog', position: 'left'},
          {
            href: 'https://github.com/rcxxx/docs',
            label: '本站源码',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'More',
            items: [
              {
                label: 'My Blog',
                href: 'https://sinnammanyo.cn/',
              //   to: 'blog',
              },
              {
                label: 'My GitHub',
                href: 'https://github.com/rcxxx',
              },
              {
                label: '机器人队知识库',
                href: 'https://wiki.wildwolf.tech/',
              },
              
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} 🌈RCXXX. Built with Docusaurus.`,
      },
      prism: {
        theme: require('prism-react-renderer/themes/github'),
        darkTheme: require('prism-react-renderer/themes/vsDark'),
      },
    },

    stylesheets: [
      {
        href: 'katex/v0.12.0/katex.min.css',
        type: 'text/css',
        integrity:
          'sha384-AfEj0r4/OFrOo5t7NnNe46zW/tFgW6x/bCJG8FqQCEo3+Aro6EYUG4+cU+KJWu/X',
        crossorigin: 'anonymous',
      },
    ],

    presets: [
      [
        '@docusaurus/preset-classic',
        {

          docs: {
            path: "./docs",
            routeBasePath: "/docs",
            sidebarPath: require.resolve('./sidebars.js'),
            remarkPlugins: [math],
            rehypePlugins: [katex],
          },

          theme: {
            customCss: require.resolve('./src/css/custom.css'),
          },
        },
      ],
    ],
  };
  