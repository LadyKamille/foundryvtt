let tokens = canvas.tokens.placeables.filter(i=> i.data.name === token.data.name)
tokens.forEach(i=> i.control({ releaseOthers: false}))
