// custom-theme.js
export default {
  fontSizes: {
    base: "40px", // corrigindo tipo de valor e incluindo unidade de medida
    xl: "60px", // corrigindo tipo de valor e incluindo unidade de medida
  },
  colors: {
    background: "#262626",
    text: "#ddd",
    primary: "#a66",
  },
  styles: {
    CodeSurfer: {
      pre: {
        color: "text",
        backgroundColor: "background",
        backgroundImage: "url(./kevincode.png)", // adicionando "url" no caminho da imagem
      },
      code: {
        color: "text",
        fontSize: "100px", // corrigindo nome da propriedade para "fontSize"
        backgroundColor: "background",
      },
      tokens: {
        "comment cdata doctype": {
          fontStyle: "italic",
        },
        "builtin changed keyword punctuation operator tag deleted string attr-value char number inserted":
          {
            color: "primary",
          },
        "line-number": {
          opacity: 0.8,
        },
      },
      title: {
        backgroundColor: "background",
        color: "text",
      },
      subtitle: {
        color: "#d6deeb",
        backgroundColor: "rgba(10,10,10,0.9)",
      },
      unfocused: {
        // only the opacity of unfocused code can be changed
        opacity: 0.1,
      },
    },
  },
};
