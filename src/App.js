import React, { useState } from 'react'
import MinMax from './minmax';

export default function(){
	let [ products, setProducts ] = useState(productsStub());

	let setCnt = (id, cnt) => {
		setProducts(products.map(pr => pr.id != id ? pr : ({ ...pr, cnt })));
	}

	return <div className="tableProduct">
		<h1>Products list</h1>
		<table>
			<tbody>
				<tr>
					<th>#</th>
					<th>Title</th>
					<th>Price</th>
					<th>Cnt</th>
					<th>Total</th>
				</tr>
				{ products.map((pr, i) => (
					<tr key={pr.id}>
						<td>{ i + 1 }</td>
						<td>{ pr.title }</td>
						<td>{ pr.price }</td>
						<td>
							<MinMax max={pr.rest} current={pr.cnt} onChange={cnt => setCnt(pr.id, cnt)} />
						</td>
						<td>{ pr.price * pr.cnt }</td>
					</tr>
				) ) }
				<tr>
					<td><strong>Total amount</strong></td>
					<td></td>
					<td></td>
					<td></td>
					<td><strong>{ products.reduce((sum, pr) => sum += pr.price * pr.cnt, 0) } </strong></td>
				</tr>
			</tbody>
		</table>
	</div>;
}


function productsStub(){
	return [
		{
			id: 100,
			title: 'Ipnone 200',
			price: 12000,
			rest: 10,
			cnt: 1
		},
		{
			id: 101,
			title: 'Samsung AAZ8',
			price: 22000,
			rest: 5,
			cnt: 1
		},
		{
			id: 103,
			title: 'Nokia 3310',
			price: 5000,
			rest: 2,
			cnt: 1
		},
		{
			id: 105,
			title: 'Huawei ZZ',
			price: 15000,
			rest: 8,
			cnt: 1
		}
	];
}

