import React from 'react';
import {createStyles, makeStyles} from '@material-ui/core/styles'
import GridList from '@material-ui/core/GridList'
import GridListTile from '@material-ui/core/GridListTile'
import {useFirestore} from "../hooks/useFirestore"

const useStyles = makeStyles(() =>
    createStyles({
        root: {
            display: 'flex',
            marginTop: "40px",
            flexWrap: 'wrap',
            justifyContent: 'space-around',
        },
        gridList: {
            width: 900,
        },
        "@media screen and (max-width: 1000px) ": {
            gridList: {
                width: 350,
                height: 610
            },
        }
    }),
)

export const ImageGridList = () => {
    const classes = useStyles()
    const {docs} = useFirestore('images')

    return (
        <div className={classes.root}>
            <GridList cellHeight={300} className={classes.gridList} cols={3}>
                {docs && docs.map((tile: any) => (
                    <GridListTile key={tile.id}>
                        <img src={tile.url} alt='loaded img'/>
                    </GridListTile>
                ))}
            </GridList>
        </div>
    )
}
