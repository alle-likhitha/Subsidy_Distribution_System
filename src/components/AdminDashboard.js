import React, { Component } from 'react';

import classes from './Main.module.css';


class AdminDashboard extends Component {

    render() {
        return (
            <div className={classes.Card}>
                <h2 className={classes.Te}>FUND DISTRIBUTION DASHBOARD</h2>
                <table className={`${classes.Table} table`}>
                    <thead>
                        <tr className={classes.TableHeader}>
                            <th scope="col">#</th>
                            <th scope="col">Name</th>
                            <th scope="col">Land</th>
                            <th scope="col">Farmer ID</th>
                            <th scope="col"></th>
                        </tr>
                    </thead>
                    <tbody id="productList">
                        {this.props.products.map((product, key) => {
                            return (
                                <tr key={key} className={classes.TableRow}>
                                    <th scope="row">{product.id.toString()}</th>
                                    <td>{product.name}</td>
                                    <td>{window.web3.utils.fromWei(product.price.toString(), 'Ether')} Acres</td>
                                    {/* Display only the first 6 characters of the owner's address */}
                                    <td>{product.owner.substring(0, 10)}</td>
                                    <td>
                                        {!product.purchased ? (
                                            <button
                                                className={classes.Cbutton}
                                                name={product.id}
                                                value={product.price}
                                                onClick={(event) => {
                                                    this.props.purchaseProduct(event.target.name, event.target.value);
                                                }}
                                            >
                                                Approve Fund
                                            </button>
                                        ) : null}
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        );
    }
}    


export default AdminDashboard;