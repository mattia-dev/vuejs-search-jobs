Vue.config.devtools = true;

new Vue(
    {
        el: "#app",
        data: {
            jobs: [
                {
                    id: 1,
                    company: 'Perferendis',
                    position: 'Developer',
                    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure veniam similique adipisci! Perferendis odio sapiente libero quam deleniti quidem consequuntur adipisci minima non iusto, sunt optio hic. Corporis, laboriosam perferendis?',
                    created_at: '5/22/2021',
                    logo: 'img/logo_1.png',
                    city: 'Roma',
                    contract: 'Full Time'
                },
                {
                    id: 2,
                    company: 'Boolean',
                    position: 'Web Designer',
                    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure veniam similique adipisci! Perferendis odio sapiente libero quam deleniti quidem consequuntur adipisci minima non iusto, sunt optio hic. Corporis, laboriosam perferendis?',
                    created_at: '6/22/2021',
                    logo: 'img/logo_2.png',
                    city: 'Milano',
                    contract: 'Full Time'
                },
                {
                    id: 3,
                    company: 'Microsoft',
                    position: 'Full Stack Web Developer',
                    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure veniam similique adipisci! Perferendis odio sapiente libero quam deleniti quidem consequuntur adipisci minima non iusto, sunt optio hic. Corporis, laboriosam perferendis?',
                    created_at: '5/12/2021',
                    logo: 'img/logo_3.png',
                    city: 'New York',
                    contract: 'Part Time'
                },
                {
                    id: 4,
                    company: 'Google',
                    position: 'QA Engineer',
                    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure veniam similique adipisci! Perferendis odio sapiente libero quam deleniti quidem consequuntur adipisci minima non iusto, sunt optio hic. Corporis, laboriosam perferendis?',
                    created_at: '5/12/2021',
                    logo: 'img/logo_4.png',
                    city: 'London',
                    contract: 'Full Time'
                },
                {
                    id: 5,
                    company: 'Facebook',
                    position: 'AI Engineer',
                    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure veniam similique adipisci! Perferendis odio sapiente libero quam deleniti quidem consequuntur adipisci minima non iusto, sunt optio hic. Corporis, laboriosam perferendis?',
                    created_at: '7/01/2021',
                    logo: 'img/logo_5.png',
                    city: 'San Francisco',
                    contract: 'Full Time'
                },
                {
                    id: 6,
                    company: 'Amazon',
                    position: 'Junior Web Developer',
                    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure veniam similique adipisci! Perferendis odio sapiente libero quam deleniti quidem consequuntur adipisci minima non iusto, sunt optio hic. Corporis, laboriosam perferendis?',
                    created_at: '5/22/2021',
                    logo: 'img/logo_6.png',
                    city: 'Madrid',
                    contract: 'Part Time'
                },
            ],
            starred: [2, 3, 6],
            applied: [2, 5],
        },

        methods: {
            starredJobs: function(id) {
                if (this.starred.includes(id)) {
                    return "starred";
                }
            },
            addAndRemoveToStarred: function(id) {
                if (!this.starred.includes(id)) {
                    this.starred.push(id);
                } else {
                    let index = this.starred.indexOf(id);
                    this.starred.splice(index, 1);
                }
            },
            starredJobsList: function() {
                let starredJobsArray = [];
                this.jobs.forEach(job => {
                    if (this.starred.includes(job.id) && !this.applied.includes(job.id)) {
                        starredJobsArray.push(job);
                    }
                });
                return starredJobsArray;
            },
            appliedJobs: function (id) {
                if (this.applied.includes(id)) {
                    return "applied";
                }
            },
            addToApplied: function(id) {
                if (!this.applied.includes(id)) {
                    this.applied.push(id);
                    if (this.starred.includes(id)) {
                        let index = this.starred.indexOf(id);
                        this.starred.splice(index, 1);
                    }
                }
            },
            appliedJobsList: function() {
                let appliedJobsArray = [];
                this.jobs.forEach(job => {
                    if (this.applied.includes(job.id)) {
                        appliedJobsArray.push(job);
                    }
                });
                return appliedJobsArray;
            }
        }
    }
)