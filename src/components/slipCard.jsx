import React, { memo, useState } from 'react';
import parseDate from '../util/date';
import Avatar from './avatar';
import EditslipForm from './editslipForm';
import styles from '../css/slipCard.module.css';

const slipCard = memo(
  ({ slip, owner, onDelete, onUpdate, onUsernameClick }) => {
    const { id, username, name, url, text, createdAt } = slip;
    const [editing, setEditing] = useState(false);
    const onClose = () => setEditing(false);
    const ownerFlow = owner ? styles.reverse : styles.default

    return (
        <li className={`${styles.slip} ${ownerFlow}`}>
            <section className={`${styles.slipContainer} ${ownerFlow}`}>
                <Avatar url={url} name={name} />
                <div className={styles.slipBody}>
                    <div className={`${styles.slipInfo} ${ownerFlow}`}>
                        <span className={styles.slipName}>{name}</span>
                        <span
                            className={styles.slipUsername}
                            onClick={() => onUsernameClick(slip)}
                        >
                            @{username}
                        </span>
                        <span className={styles.slipDate}> · {parseDate(createdAt)}</span>
                    </div>
                    <p className={styles.slipContent}>{text}</p>
                    {editing && (
                        <EditslipForm
                            slip={slip}
                            onUpdate={onUpdate}
                            onClose={onClose}
                        />
                    )}
                    {owner && (
                        <div className={styles.slipAction}>
                            <button className={styles.slipActionBtn} onClick={() => onDelete(id)}>
                                <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" viewBox="0 0 797.7 797.7" xmlSpace="preserve">
                                    <path cass="st0" d="M398.7,538.7l-229,229c-92,92-231-48-140-139l230-230l-230-229c-91-92,48-231,140-140l229,230l230-230   c91-91,231,48,139,140l-229,229l229,230c92,91-48,231-139,139L398.7,538.7z"/>
                                </svg>
                            </button>
                            <button
                                className={styles.slipActionBtn}
                                onClick={() => setEditing(true)}
                            >
                                ✎
                            </button>
                        </div>
                    )}
                </div>
            </section>
        </li>
        );
    }
);
export default slipCard;
