import React from 'react';
import {createStyles, makeStyles, Theme} from '@material-ui/core/styles';
import {useFirestore} from "../hooks/useFirestore";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginTop: '10px',
        },
        wrap: {

            maxWidth: "1300px",
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "10px 10px"

        },
        img: {
            width: "100%",
            height: "100%",
            margin: "5px"
        }

    }),
);

export const ImagesList = () => {
    const {docs} = useFirestore('images')
    console.log(docs)

    const classes = useStyles()
    return (
        <div className={classes.root}>
            <div className={classes.wrap}>

                {docs && docs.map((item: any) => {
                    return <img className={classes.img} src={item.url} key={item.id} alt='uploaded img'/>
                })}
            </div>
        </div>
    )
}
