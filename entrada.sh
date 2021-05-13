#!/bin/bash
#gatsby -v
#gatsby serve
#gatsby develop -H 0.0.0.0
node middleware.js

#{post.node.relationships.field_image ? <Card.Img className="card-img-top h-20" src={myurl + post.node.relationships.field_image.uri.url} /> : ''}
