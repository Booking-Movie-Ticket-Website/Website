function Booking() {
    return (
        <div className="woocommerce-MyAccount-content">
            <div className="woocommerce-notices-wrapper"></div>

            <table className="woocommerce-orders-table woocommerce-MyAccount-orders shop_table shop_table_responsive my_account_orders account-orders-table">
                <thead>
                    <tr>
                        <th className="woocommerce-orders-table__header woocommerce-orders-table__header-order-number">
                            <span className="nobr">Order</span>
                        </th>
                        <th className="woocommerce-orders-table__header woocommerce-orders-table__header-order-date">
                            <span className="nobr">Date</span>
                        </th>
                        <th className="woocommerce-orders-table__header woocommerce-orders-table__header-order-status">
                            <span className="nobr">Status</span>
                        </th>
                        <th className="woocommerce-orders-table__header woocommerce-orders-table__header-order-total">
                            <span className="nobr">Total</span>
                        </th>
                        <th className="woocommerce-orders-table__header woocommerce-orders-table__header-order-actions">
                            <span className="nobr">Actions</span>
                        </th>
                    </tr>
                </thead>

                <tbody>
                    <tr className="woocommerce-orders-table__row woocommerce-orders-table__row--status-processing order">
                        <td
                            className="woocommerce-orders-table__cell woocommerce-orders-table__cell-order-number"
                            data-title="Order"
                        >
                            <a href="https://demo.ovatheme.com/aovis/my-account/view-order/10741/">
                                #10741{' '}
                            </a>
                        </td>
                        <td
                            className="woocommerce-orders-table__cell woocommerce-orders-table__cell-order-date"
                            data-title="Date"
                        >
                            <time dateTime="2023-12-25T15:54:54+00:00">December 25, 2023</time>
                        </td>
                        <td
                            className="woocommerce-orders-table__cell woocommerce-orders-table__cell-order-status"
                            data-title="Status"
                        >
                            Processing
                        </td>
                        <td
                            className="woocommerce-orders-table__cell woocommerce-orders-table__cell-order-total"
                            data-title="Total"
                        >
                            <span className="woocommerce-Price-amount amount">
                                <span className="woocommerce-Price-currencySymbol">$</span>20.00
                            </span>{' '}
                            for 2 items
                        </td>
                        <td
                            className="woocommerce-orders-table__cell woocommerce-orders-table__cell-order-actions"
                            data-title="Actions"
                        >
                            <a
                                href="https://demo.ovatheme.com/aovis/my-account/view-order/10741/"
                                className="woocommerce-button button view"
                            >
                                View
                            </a>{' '}
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default Booking;
