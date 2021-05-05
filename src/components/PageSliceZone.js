import React from 'react'
import ImageGallery from '../components/ImageGallery'
import TextInCols from '../components/TextInCols'


function PageSliceZone({node}) {
    console.log('page slice node', node);
    if(node){
            return (
                <>
                    {node.body ? node.body.map((bodyContent, i) => {
                        if (bodyContent.type === "bildergalerie") {
                            return (
                    <ImageGallery images={bodyContent} key={i} />
                            )
                        }
                        if (bodyContent.type === "textspalten") {
                            return (
                    <TextInCols contents={bodyContent} key={i} />
                            )
                        } else { return null; }
                    }
                    )
                : null}
                </>
            )
    } else {return null;}
}

export default PageSliceZone
