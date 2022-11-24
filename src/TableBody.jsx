import React from 'react';
import styles from './Table.module.css'

const TableBody = ({ i }) => {
    return (
        <tbody>
            <tr>
                <td>{i.id}</td>
                <td>{i.name}</td>
                <td>{i.price}</td>
                <td>{i.left}</td>
                <td className={styles.td}><img className={styles.img} src={i.image} alt="" /></td>
            </tr>

        </tbody>
    );
};

export default TableBody;