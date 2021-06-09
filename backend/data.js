import bcrypt from 'bcryptjs';

const data = {
    users: [
        {
            name: 'Admin',
            email: '522175806@qq.com',
            password: bcrypt.hashSync('5555', 8),
            isAdmin: true,
        },
        {
            name: 'TLin',
            email: 'tianlinyang303@gmail.com',
            password: bcrypt.hashSync('5555', 8),
            isAdmin: false,
        }
    ],
    products: [
        {
            name: 'RTX 3060ti',
            category: 'GPU',
            image: '/images/p1.jpg',
            price: 1298,
            countInStock: 3,
            brand: 'Nvidia',
            rating: 4.5,
            numReviews: 1023,
            description: 'High performance graphic card',
        },
        {
            name: 'RTX 3060',
            category: 'GPU',
            image: '/images/p2.jpg',
            price: 1098,
            countInStock: 1,
            brand: 'Nvidia',
            rating: 2.5,
            numReviews: 105,
            description: 'High performance graphic card',
        },

        {
            name: 'RTX 3070',
            category: 'GPU',
            image: '/images/p3.jpg',
            price: 1498,
            countInStock: 10,
            brand: 'Nvidia',
            rating: 5,
            numReviews: 2320,
            description: 'High performance graphic card',
        },
        {
            name: 'RTX 3080',
            category: 'GPU',
            image: '/images/p4.jpg',
            price: 1899,
            countInStock: 0,
            brand: 'Nvidia',
            rating: 4.5,
            numReviews: 101,
            description: 'High performance graphic card',
        },
        {
            name: 'RTX 3090',
            category: 'GPU',
            image: '/images/p5.jpg',
            price: 2498,
            countInStock: 20,
            brand: 'Nvidia',
            rating: 4.0,
            numReviews: 69,
            description: 'High performance graphic card',
        },
        {
            name: 'GTX 1080ti',
            category: 'GPU',
            image: '/images/p6.jpg',
            price: 998,
            countInStock: 10,
            brand: 'Nvidia',
            rating: 5.0,
            numReviews: 6989,
            description: 'High performance graphic card',
        }
    ]
}

export default data;