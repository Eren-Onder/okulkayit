import db from "./sequelize-setup.js";

export async function getAll() {
  return await db.school.findAll();
}

export async function findById(pId) {
  return await db.school.findByPk(pId);
}

export async function create(pschool) {
  return await db.school.create(pschool);
}

export async function remove(pId) {
  return await db.school.destroy({
    where: { id: pId },
  });
}

export async function update(pId, pUpdatedschool) {
  return await db.school.update(pUpdatedschool, {
    where: { id: pId },
  });
}
