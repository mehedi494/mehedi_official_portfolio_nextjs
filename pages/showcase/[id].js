import { useRouter } from 'next/router';
import React from 'react';

const ViewProject = () => {
    const router = useRouter()
    return (
        <div>
            Projects are comming soon...{router.query.id}
        </div>
    );
};

export default ViewProject;