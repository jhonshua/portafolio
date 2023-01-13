import React from 'react';
import Skill1 from './Skill1'
import Skill2 from  './Skill2'
import Skill3 from './Skill3'
import Skill4 from './Skill4';
import styles from './styles.module.css'

const Skill = () => {
  return (
    <div class={styles.padre}>

      <div class={styles.tituloSkill}>Skill</div>

<div class={styles.Skill}>
      <Skill1/><br /><br /><br /><br />
      <Skill2/><br /><br /><br />
      <Skill3/><br /><br /><br />
      <Skill4/>
</div>

    </div>
  )
}

export default Skill
