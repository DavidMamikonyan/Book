import styles from './projects.module.css'
import PaginatedItems from "../../components/paginate";
import {projectsBooksData} from "../../components/DummyData";
import projectTopImg from "../../assets/images/project.png";
import React from "react";
import {Link} from "react-router-dom";


const ProjectsPage = () => {
    // const { books } = GlobalContext()

    return (
        <div className={styles["main-container"]}>
            <img src={projectTopImg} alt='project' className={styles['top-img']}/>
            <PaginatedItems data={projectsBooksData} text={'Projects'} itemsPerPage={8} type='project' />
            {/*<Link to="/create-book" id={styles["start-project"]}>start your project</Link>*/}
        </div>
    )
}

export default ProjectsPage