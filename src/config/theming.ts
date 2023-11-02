import { extendTheme, mergeThemeOverride, Theme } from '@chakra-ui/react';

export const defaultTheme = extendTheme((theme: Theme) =>
  mergeThemeOverride(theme, {
    fonts: {
      heading: 'Open Sans, sans-serif',
      body: 'Open Sans, sans-serif',
    },

    styles: {
      global: {
        html: {
          height: '100%',
          color: 'text.main',
          fontSize: '15px',
        },
        body: {
          height: '100%',
          color: 'text.main',
          fontSize: '15px',
          bg: '#f5f5f5',
        },
      },
    },

    colors: {
      // Add definitions to /environment.d.ts
      primary: theme.colors.purple,
      secondary: theme.colors.green, // ?

      // Text
      text: {
        main: theme.colors.blackAlpha['800'],
        subtitle: theme.colors.gray['500'],
        muted: theme.colors.blackAlpha['500'], // ?
        link: theme.colors.blue['500'], // ?
      },

      background: {
        main: theme.colors.blackAlpha['50'],
        hover: theme.colors.gray['100'],
        active: theme.colors.gray['100'],
      },

      border: theme.colors.blackAlpha['200'],
    },

    shadows: {
      outline: `0 0 0 3px ${theme.colors.purple['200']}`,
    },

    components: {
      FormLabel: {
        baseStyle: {
          m: 1,
        },
      },

      Input: {
        variants: {
          outline: {
            field: {
              borderRadius: 'lg',
              backgroundColor: 'white',
              borderColor: 'blackAlpha.400',
              _hover: {
                borderColor: 'primary.500',
              },
              _focus: {
                borderColor: 'primary.500',
                boxShadow: `0px 0px 3px 1px ${theme.colors.purple['500']}`,
              },
              _placeholder: { color: 'gray.500' },
            },
          },
        },
      },

      Td: {
        defaultProps: {
          overflow: 'hidden',
        },
      },

      Select: {
        variants: {
          outline: {
            field: {
              borderRadius: 'lg',
              backgroundColor: 'white',
              borderColor: 'blackAlpha.400',
              _hover: {
                borderColor: 'primary.500',
              },
              _focus: {
                borderColor: 'primary.500',
                boxShadow: `0px 0px 3px 1px ${theme.colors.purple['500']}`,
              },
              _placeholder: { color: 'gray.500' },
            },
          },
        },
      },

      Textarea: {
        variants: {
          outline: {
            borderRadius: 'lg',
            backgroundColor: 'white',
            borderColor: 'blackAlpha.400',
            _hover: {
              borderColor: 'primary.500',
            },
            _focus: {
              borderColor: 'primary.500',
              boxShadow: `0px 0px 3px 1px ${theme.colors.purple['500']}`,
            },
            _placeholder: { color: 'gray.500' },
          },
        },
      },

      Button: {
        variants: {
          solid: {
            fontSize: 'sm',
            _focus: {
              boxShadow: `0px 0px 3px 1px ${theme.colors.purple['500']}`,
              outline: 'none',
              borderColor: 'transparent',
            },
            _hover: {
              outline: 'none',
              borderColor: 'transparent',
            },
            _active: {
              outline: 'none',
              borderColor: 'transparent',
            },
          },

          outline: {
            fontSize: 'sm',
            bg: 'background.main',
            px: 6,
            _focus: {
              boxShadow: `0px 0px 3px 1px ${theme.colors.purple['500']}`,
              outline: 'none',
            },
            _hover: {
              outline: 'none',
              borderColor: 'transparent',
            },
            _active: {
              outline: 'none',
              borderColor: 'transparent',
            },
          },

          ghost: {
            fontSize: 'sm',
            _focus: {
              boxShadow: `0px 0px 3px 1px ${theme.colors.purple['500']}`,
              outline: 'none',
            },
            _hover: {
              outline: 'none',
              borderColor: 'transparent',
            },
            _active: {
              outline: 'none',
              borderColor: 'transparent',
            },
          },
        },
      },

      Table: {
        defaultProps: {
          variant: 'simple',
        },
      },

      IconButton: {
        defaultProps: {
          variant: 'ghost',
        },
      },

      Radio: {
        defaultProps: {
          colorScheme: 'purple',
        },
      },

      Progress: {
        defaultProps: {
          isIndeterminate: true,
        },
      },
    },
  }),
);
