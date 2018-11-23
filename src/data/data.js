data = {
    threads: {
        t1: {
            key: 't1',
            title: 'first thread',
            publishedAt: '',
            posts: {
                p1: 'p1'
            },
            userId: ''
        }
    },
    posts: {
        p1: {
            key: 'p1',
            publishedAt: '',
            userId: '',
            text: 'Hi there',
            threadId: 'ti'

        }
    },
    users: {
        u1: {
            name: 'Alice',
            '.key': 'u1',
            threads: {
                t1: 't1'
            },
            posts: {
                p1: 'p1'
            }
        }
    },
    forums: {
        f1: {
            '.key': 'f1',
            name: 'Piano',
            description: '',
            categoryId: 'c1',
            threads: {
                t1: 't1'
            }
        }
    },
    categories: {
        c1: {
            '.key': 'c1',
            name: 'Discussion',
            forums: {
                f1: 'f1'
            }


        }
    }



}